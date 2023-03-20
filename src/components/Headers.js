import { AddItem } from "./Buttons"

const Header = (title, datalength, link, create) => {
    return(
        <div className="header">
            <h1> 
                {title} 
                {datalength && ` ( ${datalength === 0 ? 0 : datalength} ) `}
            </h1>
            {link && AddItem(create)}
        </div>
    )
}

export {Header}