# Ramp Challenge Solution

Hi! My name is TJ Loughry and I solved the Ramp challenge. Please see the code files in this repository for details. I also completed the bonus task, and you can find that script at the bottom of the `FlagComponent.js` file. Below is the bonus script used to extract the hidden URL.

## Bonus Script
This is done in python, as that is what I have been using for years when running Selenium scripts.  This experience comes from my previous work experience at Sauce Labs.  

```python
from selenium import webdriver
from selenium.webdriver.common.by import By
import base64

driver = webdriver.Chrome()
driver.get("https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge")

def extract_hidden_url(driver):
    code_elements = driver.find_elements(By.CSS_SELECTOR, "code[data-class^='23'] div[data-tag$='93'] span[data-id]")
    num = str(len(code_elements))
    print("code_elements: " + num)
    url_chars = []
    for span in code_elements:
        if "21" in span.get_attribute("data-id"):
            char_element = span.find_element(By.CSS_SELECTOR, "i.char")
            url_chars.append(char_element.get_attribute("value"))
    return "".join(url_chars)

hidden_url = extract_hidden_url(driver)
print("URL: " + hidden_url)
driver.quit()
```

# TJ Loughry

**Front End Developer / Support Engineer**

## Work Experience

### SubjectWell
**Associate Software Engineer** - Austin, Texas  
*APR 2022 - JUL 2024*
- **Issue Resolution**: Resolved 95% of website issues by engaging stakeholders and communicating bugs to developers, enhancing functionality.
- **Codebase Review || AWS Transition**: Conducted codebase reviews, resolved issues efficiently, and supported AWS transition, improving database performance by 40%.
- **Function Monitoring**: Monitored Step and Lambda functions, collaborated on robust solutions, and facilitated developer and stakeholder interactions, ensuring 100% project alignment.

### SauceLabs
**Customer Support Engineer** - Austin, Texas  
*NOV 2018 - APR 2022*
- **Technical Optimization**: Solved Selenium/Appium automation testing issues, provided best practices, and optimized customer experience.
- **Issue Resolution**: Isolated customer issues, reported bugs to developers, and managed support tickets, maintaining high satisfaction.
- **Documentation Development**: Created customer-facing documentation and code samples for testing in the Sauce cloud using Selenium/Appium and Python.

### Ecor Ventures
**Contract Software Engineer** - Austin, Texas  
*FEB 2018 - MAY 2018*
- **Website Development**: Launched multiple websites using HTML, CSS, JavaScript, Vue.js, and NGN, increasing client engagement by 30%.
- **Solution Development**: Implemented robust solutions with team members, improving project efficiency by 25%.
- **Project Streamlining**: Optimized project specifications through interactions with client CEO, board members, and team, enhancing alignment and satisfaction by 20%.

## Contact

- **Email**: [tjloughry@gmail.com](mailto:tjloughry@gmail.com)
- **Phone**: 512-826-6923
- **LinkedIn**: [linkedin.com/in/tjloughry/](https://linkedin.com/in/tjloughry/)

## Certifications

- **General Assembly, Austin**: Web Development

## Education

- **Bachelor of Business - Accounting**: Midwestern State University
- **Associates of Science - Mathematics**: Austin Community College