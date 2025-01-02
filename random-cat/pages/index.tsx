import { NextPage } from 'next';
import { useEffect, useState } from 'react';

const IndexPage: NextPage = () => {
    const [imageUrl, setImageUrl] = useState("");
    const [loding, setLoding] = useState(true);

    useEffect(() => {
        feachImage().then((newImage) => {
            setImageUrl(newImage.url);
            setLoding(false);
        });
    }, []);

    const handleClick = async () => {
        setLoding(true);
        const newImage = await feachImage();
        setImageUrl(newImage.url);
        setLoding(false);
    }

    return <div>
                <button onClick={ handleClick }>他の猫も見る</button>
                <div>{ loding ? <h1>loding now...</h1> : <img src={imageUrl} /> }</div>
            </div>

}

export default IndexPage;

type Image = {
    url: string;
}

const feachImage = async (): Promise<Image> => {
    const res = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await res.json();
    return data[0];
}

feachImage();