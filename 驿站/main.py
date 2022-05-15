
import pause
from datetime import datetime

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

LOGIN_PAGE = "https://hk.sz.gov.cn/userPage/login"
TIMEOUT = 100

driver = webdriver.Chrome()
driver.get(LOGIN_PAGE)

pause.until(datetime(2022, 2, 13, 10, 00))
print("Processing")

target = WebDriverWait(driver, TIMEOUT).until(EC.presence_of_element_located(
    (By.CSS_SELECTOR, "#a_canBookHotel")))
target.click()


input()

driver.quit()
