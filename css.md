#    CSS

### What is CSS

CSS stands for Cascading Style Sheets and its allowe us to describes how HTML elements are to be displayed on screen, paper, or in other media, and its saves a lot of work. It can control the layout of multiple web pages all at once.

### How CSS works

css contins two part the selctor and a declartion like this ``` h1 { color: red }  ``` the selectors tell css which element its should target and the declartion what it should do with this element.

the declartion contin two parts propertys and values like this ```{color:red}``` Properties indicate the aspects of the element you want to change. For example, color, font, width, height and border and Values specify the settings you want to use for the chosen properties. .

example of css and html

```html
    <a herf='#'>Read Me </a>
 ```
 ```css
    body{
        background: skyblue;
    }
    a{
        background:red;
        padding: 25px 50px
        border-radius: 25%
    }
 ```

 the above code will change the a tag and the body to like this
 ![css](https://miro.medium.com/max/3096/1*K-d334DjE69lgOseb9wlpg.png)

 ### How to conect css with html file

you use link tag for it

 ``` html
     <link href="css/styles.css" type="text/css"    rel="stylesheet" /> 
 ```

 its contine href to tell html were to find the css file and type to tell html what the type of the file like css, js, or text and rel to specifies the relationship between the HTML page and the file it is linked to. 
