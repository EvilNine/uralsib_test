import gulpHtmlImgWrapper from "gulp-html-img-wrapper";
import imgToPicture from "gulp-html-img-to-picture"

import panini from "panini";

export const html = () => {
    panini.refresh();

    return app.gulp.src(app.path.src.html, {
            base: app.path.srcFolder
        })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "Html",
                message: "Error <%= error.message %>"
            })))
        .pipe(gulpHtmlImgWrapper({
            logger: true,
            extensions: ['.jpg', '.png', '.jpeg']
        }))
        .pipe(panini({
            root: `${app.path.srcFolder}/`,
            layouts: `${app.path.srcFolder}/layouts/`,
            partials: `${app.path.srcFolder}/partials/`,
            helpers: `${app.path.srcFolder}/helpers/`,
            data: `${app.path.srcFolder}/data/`,
        }))

        .pipe(app.gulp.dest(app.path.build.html))
        
        .pipe(app.plugins.browserSync.stream())
}