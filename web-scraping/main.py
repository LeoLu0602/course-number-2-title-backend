from scraper import Scraper

def main():
  OSU_CSE_COURSES_URL = 'https://cse.osu.edu/courses'
  OSU_CSE_COURSES_PATH = './csv/The-Ohio-State-University-CSE.csv'

  scraper = Scraper()
  scraper.get_courses(OSU_CSE_COURSES_URL, 'The Ohio State University', 'CSE')
  scraper.save(OSU_CSE_COURSES_PATH)

if __name__ == '__main__':
  main()