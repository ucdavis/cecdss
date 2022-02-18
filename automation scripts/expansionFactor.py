from selenium import webdriver
from time import time, sleep
import xlsxwriter

# prevent auto shut down for the chrome
option = webdriver.ChromeOptions()
option.add_experimental_option("detach", True)

driver = webdriver.Chrome(chrome_options=option)
driver.get('https://forestdss.ucdavis.edu/')
# PATH = "D:\chromedriver.exe"
# driver = webdriver.Chrome(PATH)
# driver.get('http://localhost:3001/')

# Writing Results to Excel
# Workbook is created
wb = xlsxwriter.Workbook('resultsOfExpansionFactor.xlsx')
# add_sheet is used to create sheet.
sheet1 = wb.add_worksheet('Sheet 1')

#set columns
sheet1.write(0, 0, 'factor')
sheet1.write(0, 1, 'Global Warming')
sheet1.write(0, 2, 'LCOE')

factors = [1,2,3,4,5,6,7,8,9,10,15,20,25,30,35,40,45,50]
#set rows
row = 1
for factor in factors:
    sheet1.write(row, 0, factor)
    row += 1

row = 1
for factor in factors:
    # change input of Expansion Factor
    inputOfFacor = driver.find_element_by_xpath("//div[@id='sidebar']/div[2]/form/div[3]/div/input")
    inputOfFacor.clear()
    inputOfFacor.send_keys(str(factor))
    sleep(1)

    # click Run Model Button
    buttonRun = driver.find_element_by_xpath("//div[@id='sidebar']/div[6]/button")
    sleep(1)
    buttonRun.click()

    start = time()
    driver.implicitly_wait(3600)
    try:
        buttonSave = driver.find_element_by_xpath("//div[@id='sidebar']/div[2]/p/button")
        buttonSave.click()
        GlobalW = driver.find_element_by_xpath("//div[@id='sidebar']/div[2]/div[5]/div/table/tbody/tr[23]/td[3]").text
        CurrentLCOE = driver.find_element_by_xpath("//div[@id='sidebar']/div[2]/div[6]/div/table/tbody/tr[25]/td[23]").text

        # write result to excel
        sheet1.write(row, 1, GlobalW)
        sheet1.write(row, 2, CurrentLCOE)
        row += 1

        driver.refresh()
    except Exception as e:
        print(e)
        print({time()-start})

wb.close()
