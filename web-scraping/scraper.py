from bs4 import BeautifulSoup
import requests
import pandas as pd

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
      
      return
    
    print('[get_courses] Mismatch!')

  def save(self, path):
    header = ['school', 'department', 'course_number', 'course_title']
    df = pd.DataFrame(self.courses, columns=header)
    df.to_csv(path, index=False)
  
