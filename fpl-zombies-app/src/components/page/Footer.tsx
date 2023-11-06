import { OverallData } from '../../model/model';

export const Footer: React.FC<OverallData> = ({
  updatetimestamp,
  currentgw,
}) => {
  const date = new Date(updatetimestamp);
  const formattedDate = date.toLocaleDateString('en-GB', {
    hour12: false,
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <footer>
      ⌚ Last update: {formattedDate} | Gameweek: {currentgw} |{' '}
      <a
        id="reddit"
        href="http://www.reddit.com/message/compose?to=fpl_jsjs_at&subject=Hello"
        target="_blank"
      >
        <img src="reddit.svg" />
      </a>{' '}
      | <span style={{ color: '#FF7519' }}>by JS</span>
    </footer>
  );
};
