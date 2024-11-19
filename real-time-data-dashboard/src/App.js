import React, { useState, useEffect } from "react";
import {
  Container,
  CircularProgress,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import DataTable from "./components/DataTable";
import RealTimeChart from "./components/RealTimeChart";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData((prevData) => [...prevData, ...response.data.slice(0, 5)]);
      setError(null);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch data.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container maxWidth="lg" style={{ marginTop: "2rem" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Real-Time Data Dashboard
      </Typography>
      {loading ? (
        <CircularProgress style={{ display: "block", margin: "2rem auto" }} />
      ) : error ? (
        <Typography color="error" align="center">
          {error}
        </Typography>
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Real-Time Chart
                </Typography>
                <RealTimeChart data={data} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Data Table
                </Typography>
                <DataTable data={data} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default App;
