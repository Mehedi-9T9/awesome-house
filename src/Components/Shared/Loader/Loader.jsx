
import { DNA } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className='flex items-center justify-center'>
            <DNA
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
        </div>
    );
};

export default Loader;