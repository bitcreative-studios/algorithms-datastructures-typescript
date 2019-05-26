import * as fs from "fs"
import * as path from "path"
import * as dir from "node-dir"

// let files = fs.readdirSync(`${__dirname}/exercises`)
// files.forEach(fileName => {
//   const [number] = fileName.match(/\d+/) ? fileName.match(/\d+/) : [undefined]
//   const savePath = `src/exercise-${number}/solution.ts`
//   const content = fs.readFileSync(`${__dirname}/exercises/${fileName}`, {
//     encoding: "utf-8",
//   })
//   const entryPoint = content.search(/#+ Solution/i)
//
//   if (entryPoint > 0) {
//     fs.writeFileSync(savePath, content.slice(entryPoint))
//   }
// })

// files = fs.readdirSync(`${__dirname}/src/`)
// const BASE_DIR = "src"
// files.forEach(fileName => {
//   let file = `${BASE_DIR}/${fileName}/solution.ts`
//   let content = fs.readFileSync(file, {
//     encoding: "utf-8",
//   })
//   content = content
//     .split("\n")
//     .filter(line => !/(`+|#+)/.test(line))
//     .join("\n")
//   fs.writeFileSync(file, content)
// })

// files.forEach(file => {
//   const [number] = file.match(/\d+/) ? file.match(/\d+/) : [undefined]
//   const savePath = `src/exercise-${number}/README.md`
//   const content = fs.readFileSync(`${__dirname}/exercises/${file}`, {
//     encoding: "utf-8",
//   })
//   const exitPoint = content.search(/#+ Solution/i)
//
//   // if (exitPoint > 0) {
//   //   fs.writeFileSync(savePath, content.slice(exitPoint))
//   // }
//   console.log(content.slice(0, exitPoint))
// })

dir.promiseFiles(`${__dirname}/src/`).then(files => {
  const readmes = files.filter(file => /.md$/.test(file))
  readmes.forEach(filePath => {
    fs.renameSync(filePath, `${path.dirname(filePath)}/readme.md`)
  })
})
