from selenium import webdriver
from time import time, sleep
from selenium.webdriver.support.ui import Select
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
wb = xlsxwriter.Workbook('resultsOfTreatSystem.xlsx')
# add_sheet is used to create sheet.
sheet1 = wb.add_worksheet('Sheet 1')
# set Columns
sheet1.write(0, 1, 'Global Warming')
sheet1.write(0, 2, 'LCOE')

treatMent = ['Clearcut', 'Commercial Thin', 'Commercial Thin Chip Tree Removal', 'Timber Salvage', 'Timber Salvage Chip Tree Removal', 'Selection', 'Selection Chip Tree Removal', 'Ten Percent Group Selectio', 'Twenty Percent Group Selection', 'Biomass Salvage']
systems = ['Ground-Based Mechanized Whole Tree', 'Ground-Based Manual Whole Tree', 'Ground-Based Manual Log', 'Ground-Based Cut To Length', 'Cable Manual Whole Tree/Log', 'Cable Manual Whole Tree', 'Cable Manual Log', 'Cable Cut To Length', 'Helicopter Manual Log', 'Helicopter Cut To Length']

results = []
row = 1
# xattr -d com.apple.quarantine /usr/local/bin/chromedriver tell Mac OS to trust this binary by lifting the quarantine

for i in range(10):
    if i == 3: continue
    for j in range(10):
        if (i == 1 or i == 5 ) and (j == 2 or j == 4 or j == 6 or j == 7 or j == 8 or j == 9 ): continue
        treatmentSelect = Select(driver.find_element_by_xpath("//div[@id='sidebar']/div[3]/form/div[1]/select"))
        treatmentSelect.select_by_index(i)
        # t = treatmentSelect.first_selected_option.text
        sleep(1)

        systemSelect = Select(driver.find_element_by_xpath("//div[@id='sidebar']/div[3]/form/div[2]/select"))
        systemSelect.select_by_index(j)
        # s = systemSelect.first_selected_option.text
        buttonRun = driver.find_element_by_xpath("//div[@id='sidebar']/div[6]/button")
        sleep(1)
        buttonRun.click()

        start = time()
        # wait one hour untill 'Export Result' Button Shows Up
        driver.implicitly_wait(3600)
        try:
            buttonSave = driver.find_element_by_xpath("//div[@id='sidebar']/div[2]/p/button")
            # works for MacOS
            buttonSave.click()
            # Feedstock = driver.find_element_by_xpath("//div[@id='sidebar']/div[2]/div[4]/div/table/tbody/tr[1]/td[3]").text
            # Coproduct = driver.find_element_by_xpath("//div[@id='sidebar']/div[2]/div[4]/div/table/tbody/tr[2]/td[3]").text
            GlobalW = driver.find_element_by_xpath("//div[@id='sidebar']/div[2]/div[5]/div/table/tbody/tr[23]/td[3]").text
            CurrentLCOE = driver.find_element_by_xpath("//div[@id='sidebar']/div[2]/div[6]/div/table/tbody/tr[25]/td[23]").text
            results.append([treatMent[i], systems[j], GlobalW, CurrentLCOE])
            sheet1.write(row, 0, treatMent[i] + ' ' + systems[j])
            sheet1.write(row, 1, GlobalW)
            sheet1.write(row, 2, CurrentLCOE)
            row += 1
            if j == 9: row += 1

            print(results)
            driver.refresh()

        except Exception as e:
            print(e)
            print({time()-start})

wb.close()


