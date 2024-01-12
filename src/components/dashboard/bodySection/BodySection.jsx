import './BodySection.css';
import TopSection from './topSection/TopSection';
import ListingSection from './listingSection/ListingSection';
import ActivitySection from './activitySection/ActivitySection';

const BodySection = () => {
    return (
        <div className='mainContent'>
            <TopSection />

            <div className="bottom flex">
                <ListingSection />
                <ActivitySection />
            </div>
        </div>
    );
};

export default BodySection;