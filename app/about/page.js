import BasilNotionOutline from '../components/icons/notion';
import getConfig from 'next/config';
// import Licenses from '../components/licenses';

const { publicRuntimeConfig } = getConfig();


const About = () => {
    return (
        <main className="flex min-h-full box-border flex-col items-start justify-between px-5 pb-5 sm:px-10 sm:pb-10 lg:px-24 lg:pb-24">
            <h1 >About</h1>
            not much to say here
        </main>
    );

}

export default About;