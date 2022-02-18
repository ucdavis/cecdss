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
wb = xlsxwriter.Workbook('resultsOfSensitivity.xlsx')
# add_sheet is used to create sheet.
sheet1 = wb.add_worksheet('Sheet 1')
# set Columns
sheet1.write(0, 1, '+50%')
sheet1.write(0, 2, '+40%')
sheet1.write(0, 3, '+30%')
sheet1.write(0, 4, '+20%')
sheet1.write(0, 5, '+10%')
sheet1.write(0, 6, '+00%')
sheet1.write(0, 7, '-10%')
sheet1.write(0, 8, '-20%')
sheet1.write(0, 9, '-30%')
sheet1.write(0, 10, '-40%')
sheet1.write(0, 11, '-50%')

# set Rows
sheet1.write(1, 0, 'CapitalCost')
sheet1.write(2, 0, 'O&M Cost')
sheet1.write(3, 0, 'Debt Ratio')
sheet1.write(4, 0, 'Debt Interest Rate')
sheet1.write(5, 0, 'Cost of Equity')
sheet1.write(6, 0, 'Net Efficiency')
sheet1.write(7, 0, 'Capacity Factor')
sheet1.write(8, 0, 'Heat Price')

multiples = [1.5, 1.4, 1.3, 1.2, 1.1, 1.0, 0.9, 0.8, 0.7, 0.6, 0.5]

# ################### Capital Cost ###################
resultsOfCapCost = []
for multiple in multiples:
    # click the View More Detailed Inputs button    
    buttonViewMoreDetailedInputs = driver.find_element_by_xpath("//div[@id='sidebar']/div[5]/button")
    buttonViewMoreDetailedInputs.click()
    sleep(1)

    # change Model to GP
    modelSelect = Select(driver.find_element_by_xpath("//div[@id='sidebar']/div[5]/form/div[1]/select"))
    modelSelect.select_by_index(2)

    # change the input of Capital Cost 
    inputOfCapCost = driver.find_element_by_xpath("//div[@id='sidebar']/div[5]/form/div[2]/div/input")
    value = int(inputOfCapCost.get_attribute('value'))
    inputOfCapCost.clear()
    newValue = int(value*multiple)
    print(newValue)
    inputOfCapCost.send_keys(newValue)
    sleep(2)

    # click Run Model Button
    buttonRun = driver.find_element_by_xpath("//div[@id='sidebar']/div[6]/button")
    sleep(1)
    buttonRun.click()

    start = time()
    driver.implicitly_wait(3600)
    try:
        buttonSave = driver.find_element_by_xpath("//div[@id='sidebar']/div[2]/p/button")
        buttonSave.click()
        CurrentLCOE = driver.find_element_by_xpath("//div[@id='sidebar']/div[2]/div[6]/div/table/tbody/tr[25]/td[23]").text
        resultsOfCapCost.append(CurrentLCOE)
        driver.refresh()
        # break
    except Exception as e:
        print(e)
        print({time()-start})

print(resultsOfCapCost)
for col, data in enumerate(resultsOfCapCost):
    sheet1.write(1, col+1+(11-len(resultsOfCapCost)), data)

################### Debt Ratio #################### 
resultsOfDebtRatio = []
for multiple in multiples:
    # click the View More Detailed Inputs button    
    buttonViewMoreDetailedInputs = driver.find_element_by_xpath("//div[@id='sidebar']/div[5]/button")
    buttonViewMoreDetailedInputs.click()
    sleep(2)

    # change Model to GP
    modelSelect = Select(driver.find_element_by_xpath("//div[@id='sidebar']/div[5]/form/div[1]/select"))
    modelSelect.select_by_index(2)

    # change input of Debt Ratio
    inputOfDebtRatio = driver.find_element_by_xpath("//div[@id='sidebar']/div[5]/form/div[42]/div/input")
    value = int(inputOfDebtRatio.get_attribute('value'))
    newValue = str(value*multiple)
    print(newValue)
    if float(newValue) > 100.0: 
        driver.refresh()
        continue
    inputOfDebtRatio.clear()
    inputOfDebtRatio.send_keys(newValue)
    sleep(2)

    # click Run Model Button
    buttonRun = driver.find_element_by_xpath("//div[@id='sidebar']/div[6]/button")
    sleep(1)
    buttonRun.click()

    start = time()
    driver.implicitly_wait(3600)
    try:
        buttonSave = driver.find_element_by_xpath("//div[@id='sidebar']/div[2]/p/button")
        buttonSave.click()
        CurrentLCOE = driver.find_element_by_xpath("//div[@id='sidebar']/div[2]/div[6]/div/table/tbody/tr[25]/td[23]").text
        resultsOfDebtRatio.append(CurrentLCOE)

        # print(resultsOfDebtRatio)
        driver.refresh()
        # break
    except Exception as e:
        print(e)
        print({time()-start})

print(resultsOfDebtRatio)
for col, data in enumerate(resultsOfDebtRatio):
    sheet1.write(3, col+1+(11-len(resultsOfDebtRatio)), data)

################### Debt Interest Rate ##################
resultsOfDebtInterestRate = []
for multiple in multiples:
    # click the View More Detailed Inputs button    
    buttonViewMoreDetailedInputs = driver.find_element_by_xpath("//div[@id='sidebar']/div[5]/button")
    buttonViewMoreDetailedInputs.click()
    sleep(1)

    # change Model to GP
    modelSelect = Select(driver.find_element_by_xpath("//div[@id='sidebar']/div[5]/form/div[1]/select"))
    modelSelect.select_by_index(2)

    # change input of Debt Interest Rate
    inputOfDebtInterestRate = driver.find_element_by_xpath("//div[@id='sidebar']/div[5]/form/div[43]/div/input")
    value = int(inputOfDebtInterestRate.get_attribute('value'))
    newValue = value*multiple
    print(newValue)
    if newValue > 100.0: 
        driver.refresh()
        continue
    inputOfDebtInterestRate.clear()
    inputOfDebtInterestRate.send_keys(str(newValue))
    sleep(2)

    # click Run Model Button
    buttonRun = driver.find_element_by_xpath("//div[@id='sidebar']/div[6]/button")
    sleep(1)
    buttonRun.click()

    start = time()
    driver.implicitly_wait(3600)
    try:
        buttonSave = driver.find_element_by_xpath("//div[@id='sidebar']/div[2]/p/button")
        buttonSave.click()
        CurrentLCOE = driver.find_element_by_xpath("//div[@id='sidebar']/div[2]/div[6]/div/table/tbody/tr[25]/td[23]").text
        resultsOfDebtInterestRate.append(CurrentLCOE)

        driver.refresh()
    except Exception as e:
        print(e)
        print({time()-start})

print(resultsOfDebtInterestRate)
for col, data in enumerate(resultsOfDebtInterestRate):
    sheet1.write(4, col+1+(11-len(resultsOfDebtInterestRate)), data) 


#################### Cost of Equlity ####################
resultsOfCostOfEqulity = []
for multiple in multiples:
    # click the View More Detailed Inputs button    
    buttonViewMoreDetailedInputs = driver.find_element_by_xpath("//div[@id='sidebar']/div[5]/button")
    buttonViewMoreDetailedInputs.click()
    sleep(1)

    # change Model to GP
    modelSelect = Select(driver.find_element_by_xpath("//div[@id='sidebar']/div[5]/form/div[1]/select"))
    modelSelect.select_by_index(2)

    # change input of Cost of Equlity
    inputOfCostOfEqulity = driver.find_element_by_xpath("//div[@id='sidebar']/div[5]/form/div[45]/div/input")
    value = int(inputOfCostOfEqulity.get_attribute('value'))
    newValue = value*multiple
    print(newValue)
    if newValue > 100.0: 
        driver.refresh()
        continue
    inputOfCostOfEqulity.clear()
    inputOfCostOfEqulity.send_keys(str(newValue))
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
        CurrentLCOE = driver.find_element_by_xpath("//div[@id='sidebar']/div[2]/div[6]/div/table/tbody/tr[25]/td[23]").text
        resultsOfCostOfEqulity.append(CurrentLCOE)
        # break

        driver.refresh()
    except Exception as e:
        print(e)
        print({time()-start})

print(resultsOfCostOfEqulity)
for col, data in enumerate(resultsOfCostOfEqulity):
    sheet1.write(5, col+1+(11-len(resultsOfCostOfEqulity)), data)

################## Net Efficiency ###############
resultsOfNetEfficiency = []
for multiple in multiples:
    # click the View More Detailed Inputs button    
    buttonViewMoreDetailedInputs = driver.find_element_by_xpath("//div[@id='sidebar']/div[5]/button")
    buttonViewMoreDetailedInputs.click()
    sleep(1)

    # change Model to GP
    modelSelect = Select(driver.find_element_by_xpath("//div[@id='sidebar']/div[5]/form/div[1]/select"))
    modelSelect.select_by_index(2)

    # change input of Net Efficiency
    inputOfNetEfficiency = driver.find_element_by_xpath("//div[@id='sidebar']/div[5]/form/div[8]/div/input")
    value = int(inputOfNetEfficiency.get_attribute('value'))
    newValue = value*multiple
    print(newValue)
    if newValue > 100.0: 
        driver.refresh()
        continue
    inputOfNetEfficiency.clear()
    inputOfNetEfficiency.send_keys(str(newValue))
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
        CurrentLCOE = driver.find_element_by_xpath("//div[@id='sidebar']/div[2]/div[6]/div/table/tbody/tr[25]/td[23]").text
        resultsOfNetEfficiency.append(CurrentLCOE)
        
        driver.refresh()
    except Exception as e:
        print(e)
        print({time()-start})

print(resultsOfNetEfficiency)
for col, data in enumerate(resultsOfNetEfficiency):
    sheet1.write(6, col+1, data)

#################### Capacity Factor #################
resultsOfCapacityFactor = []
for multiple in multiples:
    # click the View More Detailed Inputs button    
    buttonViewMoreDetailedInputs = driver.find_element_by_xpath("//div[@id='sidebar']/div[5]/button")
    buttonViewMoreDetailedInputs.click()
    sleep(1)

    # change Model to GP
    modelSelect = Select(driver.find_element_by_xpath("//div[@id='sidebar']/div[5]/form/div[1]/select"))
    modelSelect.select_by_index(2)

    # change input of Capacity Factor
    inputOfCapacityFactor = driver.find_element_by_xpath("//div[@id='sidebar']/div[5]/form/div[5]/div/input")
    value = int(inputOfCapacityFactor.get_attribute('value'))
    newValue = value*multiple
    print(newValue)
    if newValue > 100.0: 
        driver.refresh()
        continue
    inputOfCapacityFactor.clear()
    inputOfCapacityFactor.send_keys(str(newValue))
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
        CurrentLCOE = driver.find_element_by_xpath("//div[@id='sidebar']/div[2]/div[6]/div/table/tbody/tr[25]/td[23]").text
        resultsOfCapacityFactor.append(CurrentLCOE)

        driver.refresh()
    except Exception as e:
        print(e)
        print({time()-start})

print(resultsOfCapacityFactor)
for col, data in enumerate(resultsOfCapacityFactor):
    sheet1.write(7, col+1+(11-len(resultsOfCapacityFactor)), data)


#################### Heat Price ####################
resultsOfHeatPrice = []
for multiple in multiples:
    # click the View More Detailed Inputs button    
    buttonViewMoreDetailedInputs = driver.find_element_by_xpath("//div[@id='sidebar']/div[5]/button")
    buttonViewMoreDetailedInputs.click()
    sleep(1)

    # change Model to GP
    modelSelect = Select(driver.find_element_by_xpath("//div[@id='sidebar']/div[5]/form/div[1]/select"))
    modelSelect.select_by_index(2)

    # change input of Heat Price
    inputOfHeatPrice = driver.find_element_by_xpath("//div[@id='sidebar']/div[5]/form/div[19]/div/input")
    value = float(inputOfHeatPrice.get_attribute('value'))
    newValue = value*multiple
    print(newValue)
    inputOfHeatPrice.clear()
    inputOfHeatPrice.send_keys(str(newValue))
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
        CurrentLCOE = driver.find_element_by_xpath("//div[@id='sidebar']/div[2]/div[6]/div/table/tbody/tr[25]/td[23]").text
        resultsOfHeatPrice.append(CurrentLCOE)

        driver.refresh()
    except Exception as e:
        print(e)
        print({time()-start})

print(resultsOfHeatPrice)
for col, data in enumerate(resultsOfHeatPrice):
    sheet1.write(8, col+1, data)

wb.close()


