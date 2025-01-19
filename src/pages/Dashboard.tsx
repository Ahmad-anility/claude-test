import { Grid, Paper, Typography, Box } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const Dashboard = () => {
  const stats = [
    { title: 'Total Users', value: '1,234', icon: <PeopleIcon sx={{ fontSize: 40 }} />, color: '#1976d2' },
    { title: 'Revenue', value: '$15,678', icon: <AttachMoneyIcon sx={{ fontSize: 40 }} />, color: '#2e7d32' },
    { title: 'Growth', value: '+23%', icon: <TrendingUpIcon sx={{ fontSize: 40 }} />, color: '#9c27b0' },
  ];

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Dashboard Overview
      </Typography>
      
      <Grid container spacing={3}>
        {stats.map((stat) => (
          <Grid item xs={12} sm={6} md={4} key={stat.title}>
            <Paper
              sx={{
                p: 3,
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                borderRadius: 2,
              }}
              elevation={2}
            >
              <Box
                sx={{
                  backgroundColor: `${stat.color}15`,
                  borderRadius: '50%',
                  p: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {stat.icon}
              </Box>
              <Box>
                <Typography variant="h6" color="text.secondary">
                  {stat.title}
                </Typography>
                <Typography variant="h4">
                  {stat.value}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;