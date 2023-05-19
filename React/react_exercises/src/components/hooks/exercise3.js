import react, {useState} from 'react';
import { HorizontalBarrier } from './sharedComponents';

export default function Exercise3 () {
    const [colorPlater, setColorPlate] = useState([])
    return (
        <div>
            <h1>Second exercise </h1>

            <h1 style= {{fontSize : '10px' }} >
            <h1> Create a React component called "ColorPicker". This component should render a set of color squares, each representing a different color. When a color square is clicked, its corresponding color should be displayed in a text box below. Additionally, provide an option to clear the selected color, which will remove the color from the text box.</h1>
            </h1>
            <HorizontalBarrier />

        </div>

    );
}