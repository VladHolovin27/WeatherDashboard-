import { useDispatch, useSelector } from 'react-redux';
import styles from './InteractionCards.module.css'
import { getAnimals, getIsLoading } from '../../../redux/selectors';
import { useEffect, useState } from 'react';
import { fetchNature } from '../../../redux/operators';

function InteractionCards() {
    const dispatch = useDispatch();
    const animals = useSelector(getAnimals);
    const isLoading = useSelector(getIsLoading)
    const [count, setCount] = useState(4);

    useEffect(() => {
        const animal = ["dog", "cat", "fox", "rabbit", "row", "squirrel", "bird", "pig", "hamster", "guinea pig", "horse", "cow", "chicken", "fish", "tiger", "elephant", "lion", "panda", "cheetah", "leopard", "wolf", "kangaroo", "rhinoceros", "panda", "dolphin", "shark", "whale", "octopus", "seahorse", "turtle", "squid", "jellyfish", "giraffe"];
        for (let i = 0; i < 4; i++) {
        const random = animal[Math.floor(Math.random() * animal.length)];
        dispatch(fetchNature(random));
        }
    }, [count]);

    return(
        <section className={styles.interactionCardsSection}>
            <div className={styles.interactionWrapper}>
                <h1 className={styles.interactionCardsTitle}>Interaction with our pets</h1>
                <div className={styles.interactionCards}>
                    {isLoading && animals.length === 0 && <p>Loading...</p>}
                    {!isLoading && animals.length === 0 && <p>Not found</p>}
                    {animals.length > 0 && animals.slice(0, count).map((item, index) => (
                        <div key={index} className={styles.interactionCard}>
                            <img src={item.img} className={styles.natureImg} alt={item.title} />
                            <p className={styles.natureTitle}>{item.title}</p>
                        </div>
                    ))}
                </div>
                <button onClick={() => setCount(prev => prev + 4)} className={styles.seeMoreBtn}>See more</button>
            </div>
        </section>
    )
}

export default InteractionCards;

