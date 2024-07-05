import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CustomCard = ({ title, id }) => {
    return (
      <Card id={id} className="custom-card section-box" style={{ backgroundColor: '#333', textAlign: 'center', cursor: 'pointer' }}>
        <CardContent>
          <Typography variant="h7" component="div" style={{ color: '#fff', fontFamily: 'Open Sans, sans-serif', fontWeight:'bold' }}>
            {title}
          </Typography>
        </CardContent>
      </Card>
    );
  };

  export default CustomCard;