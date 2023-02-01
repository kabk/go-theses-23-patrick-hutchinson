from selenium import webdriver
from selenium.webdriver.common.by import By

from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

caps = DesiredCapabilities().FIREFOX
caps["pageLoadStrategy"] = "none"  #  interactive
driver = webdriver.Firefox(capabilities=caps)


driver.get("https://www.nytimes.com/2023/01/18/us/politics/ukraine-crimea-military.html")
print(driver.find_element(By.CSS_SELECTOR, "h1").value_of_css_property("font-size"))
print(driver.find_element(By.CSS_SELECTOR, "h1").value_of_css_property("color"))
print(driver.find_element(By.CSS_SELECTOR, "h1").value_of_css_property("line-height"))



#import requests
#from bs4 import BeautifulSoup
#
#import cssutils
#import json
#
##selectors = {}
#
#font_colors = []
#bg_colors = []
#
#url='https://www.nytimes.com'
#response = requests.get(url)
#
#soup = BeautifulSoup(response.text, 'html.parser')
#headlines = soup.find('body').find_all('p')
#
#print(headlines);

#for i in range(len(headlines)):
#    style = headlines[i].attrs['style']
#    font_color = style[6:13]
#    font_colors.append(font_color)
##    print('font color is ' + font_color)
#
#    bg_color = style[25:32]
#    bg_colors.append(bg_color)
##    print('background color is ' + bg_code)
##print(font_colors)
##print(bg_colors)
#
#d = {'data': [{'font_colors': f, 'bg_colors': b} for f, b in zip(font_colors, bg_colors)]}
#print( d )
#
#jsonString = json.dumps(d)
#jsonFile = open("./data.json", "w")
#jsonFile.write(jsonString)
#jsonFile.close()


