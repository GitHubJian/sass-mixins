'use strict'

const NODE_ENV = process.env.NODE_ENV
const [isProduction] = [NODE_ENV === 'production']

const {series, src, dest} = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const prettier = require('gulp-prettier')
const cssmin = require('gulp-cssmin')
const cssFormat = require('gulp-css-format')

function compile() {
    return src('./src/*.scss')
        .pipe(sass.sync())
        .pipe(
            autoprefixer({
                cascade: false,
            })
        )
        .pipe(
            isProduction
                ? cssmin()
                : prettier({
                      singleQuote: true,
                      tabWidth: 4,
                      semi: true,
                      trailingComma: 'all',
                      endOfLine: 'crlf',
                      bracketSpacing: true,
                  })
        )
        .pipe(dest('./lib'))
}

exports.build = series(compile)
