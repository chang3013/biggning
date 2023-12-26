from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.keys import Keys
from urllib.request import urlopen
from urllib.parse import quote_plus
from bs4 import BeautifulSoup
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import selenium
driver=webdriver.Chrome()
baseURL = 'https://www.instagram.com/p/C0BXBk5S53_'
driver.get(baseURL)

# https://www.instagram.com/p/C0BXBk5S53_?img_index=1

# x5yr21d xu96u03 x10l6tqk x13vifvy x87ps6o xh8yej3
# x5yr21d xu96u03 x10l6tqk x13vifvy x87ps6o xh8yej3
# https://scontent.cdninstagram.com/v/t51.2885-15/403877209_867086588355818_5158890318544027379_n.jpg?stp=dst-jpg_e35_p1080x1080&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE2NTIuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=-HYommq44VwAX9HteMN&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI0Mjk3NDQ2NTI3MzQzMTYzNg%3D%3D.2-ccb7-5&oh=00_AfBSEaRiBNcNqshdJ_TK7irzkWGznbfDhH-vQITcgCiM_g&oe=657EBE35&_nc_sid=10d13b
# test = driver.find_element(By.XPATH,"/html/body/div[2]/div/div/div[3]/div/div/div[2]/div/div[1]/div[1]/div/div/div[1]/div[2]/div/div/div/ul/li[2]/div/div[1]/div[1]/img")
# print(test.text)
# # time.sleep(120)
# html = driver.page_source
# soup = BeautifulSoup(html)
# insta = driver.find_element(By.CLASS_NAME,["._aagv"])
# insta = soup.select_one(".x5yr21d.xu96u03.x10l6tqk.x13vifvy.x87ps6o.xh8yej3")
# insta = soup.select(".x5yr21d.xu96u03.x10l6tqk.x13vifvy.x87ps6o.xh8yej3")
# insta2 = soup.select("._aagv")

insta = driver.find_elements_by_xpath("//*[@id='mount_0_0_AE']/div/div/div[3]/div/div/div[2]/div/div[1]/div[1]/div/div/div[1]/div[2]/div/div/div/ul/li[2]/div/div[1]/div[1]")

time.sleep(10)
# print(insta)
print(insta)
driver.close()