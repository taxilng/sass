const showdown = require('showdown')
const converter = new showdown.Converter()
const path = require('path')
const fs = require('fs')

function compile(params) {
  const templatePath = path.resolve(__dirname, params.temp)
  const articlePath = path.resolve(__dirname, params.source)

  console.log(articlePath)
  try {
    const articleContent = fs.readFileSync(articlePath, { encoding: 'utf-8' })
    const htmlContent = fs.readFileSync(templatePath, { encoding: 'utf-8' })
    // console.log(htmlContent);

    const result = htmlContent.replace(
      '__MARKDOWN_TEMPLATE__',
      converter.makeHtml(articleContent)
    )
    // console.log(ctx.body)
    fs.writeFile(params.resolve, result, {}, err => {
      if (err) {
        throw err
      }
    })
  } catch (err) {
    throw err
  }
}
const params = {
    temp: './convert/temp.html',
    source: './convert/md/learn.md',
    resolve: './convert/dist/markdon.html',
}
compile(params)
