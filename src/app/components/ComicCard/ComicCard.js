//import { StyledComicCard } from './ComicCard.styled';


const ComicCard = ({ comic }) => {

    return (

        <div>

            <img
                className="comicCard_image"
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt="comic"
            />
            <div className="comicCard_info">
                <p
                    className="comic_text">
                    <span className="heading">Title: </span>
                    {comic.title}
                </p>
                <p
                    className="comic_text">
                    <span className="heading">Issue: </span>
                    {comic.issueNumber}
                </p>
                <div className="comic_description">
                    <p
                        className="comic_text">
                        <span className="heading">Description: </span>
                        {comic.description}
                    </p>
                </div>
                <p
                    className="comic_text">
                    <span className="heading">Page Count: </span>
                    {comic.pageCount}
                </p>
            </div>
        </div>

    )

};


export default ComicCard;