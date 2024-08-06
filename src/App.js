import React from 'react';
import FlagComponent from './FlagComponent';

const App = () => {
  return (
    <div>
      <header >
        <h1>Flag Display</h1>
        <FlagComponent />
      </header>
    </div>
  );
};

export default App;


// ## Bonus Script
// This is done in python, as that is what I have been using for years when running Selenium scripts.  
// This experience comes from my previous work experience at Sauce Labs.  

// ```python
// from selenium import webdriver
// from selenium.webdriver.common.by import By
// import base64

// driver = webdriver.Chrome()
// driver.get("https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge")

// def extract_hidden_url(driver):
//     code_elements = driver.find_elements(By.CSS_SELECTOR, "code[data-class^='23'] div[data-tag$='93'] span[data-id]")
//     num = str(len(code_elements))
//     print("code_elements: " + num)
//     url_chars = []
//     for span in code_elements:
//         if "21" in span.get_attribute("data-id"):
//             char_element = span.find_element(By.CSS_SELECTOR, "i.char")
//             url_chars.append(char_element.get_attribute("value"))
//     return "".join(url_chars)

// hidden_url = extract_hidden_url(driver)
// print("URL: " + hidden_url)
// driver.quit()
// ```
