from scraper import Scraper

def main():
  OSU_CSE_COURSES_URL = 'https://cse.osu.edu/courses'

  scraper = Scraper()
  scraper.get_courses(OSU_CSE_COURSES_URL, 'The Ohio State University', 'CSE')

if __name__ == '__main__':
  main()