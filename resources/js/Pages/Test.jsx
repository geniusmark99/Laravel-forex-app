import { Link, Head, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { Warning } from 'postcss';


function Warn(props) {
    const show = !props.show;

    if (show) {
        return null;
    }

    return <>
        <div className='bg-red-400 text-red-100 p-2 w-full'>
            Hello there, this is a warning.
        </div>
    </>
}




const count = 0;
export default function Test({ name }) {

    const { url, component } = usePage();
    const [state, setState] = useState(false);


    return <>
        <Head>
            <title>
                Test app
            </title>
        </Head>
        <Warn show={state} />
        <div className='dark:bg-gray-700'>
            <Link href="/">Home</Link>
            <Link href="/test" className={url === '/test' ? 'text-red-500' : ''}>Test</Link>
            <h1>TESTING...</h1>
        </div>

        <button onClick={() => {
            setState(true)
        }}>

            Show warning

            {name}
        </button>


    </>
}