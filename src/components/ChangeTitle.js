export const changeTitle = (title) => {
    document.title = `Hulu ${title !== null ? '- ' + title : ""}`
}

export const ChangeSubTitle = (title) => {
    document.title = `Hulu - ${title}`
}