from bs4 import BeautifulSoup
import requests

class Scraper:
  def __init__(self):
    self.courses = []

  def get_courses(self, url, school, department):
    result = requests.get(url)
    doc = BeautifulSoup(result.text,'html.parser')

    numbers = doc.find_all('span', class_='number')
    titles = doc.find_all('span', class_='title')

    if len(numbers) == len(titles):
      for i in range(len(numbers)):
        self.courses.append([
          school,
          department,
          numbers[i].string.strip('()'),
          titles[i].string
        ])

      print('[get_courses] Done!')
      print(self.courses[-1])
      
      return
    
    print('[get_courses] Mismatch!')

  def save(self, path):
    pass

