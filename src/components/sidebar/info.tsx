import { useState } from 'react';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import useAcademicSummary from '../../use/use-summary';

const statistics = [
  {
    name: "Inscritos",
    desc: "",
    properties: ["total_courses", "total_credits"]
  },
  {
    name: "Aprobados",
    desc: "",
    properties: ["total_courses_passed", "total_credits_passed"]
  },
  {
    name: "Retirados",
    desc: "",
    properties: ["total_courses_removed", "total_credits_removed"]
  },
  {
    name: "Reprobados",
    desc: "",
    properties: ["total_courses_failed", "total_credits_failed"]
  }
];

type PropertiesType = 
  "total_courses"
  | "total_credits"
  | "total_courses_passed"
  | "total_credits_passed"
  | "total_courses_removed"
  | "total_credits_removed"
  | "total_courses_failed"
  | "total_credits_failed";

export default function Info() {
  const { summary, summary_grade } = useAcademicSummary();

  const [tab, setTab] = useState(0);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  }

  return (
    <>
      <Typography variant="subtitle2" color="text.secondary">
        INDICE ACADÉMICO
      </Typography>
      <Typography variant="h4" gutterBottom>
        {summary_grade}
      </Typography>

      <Box width="100%">
        <Tabs value={tab} onChange={handleTabChange} variant="fullWidth" centered>
          {
            ["Asignaturas", "Créditos"].map((label, index) => (
              <Tab
                key={`index-${index}`}
                label={
                  <Typography variant="body1" color="text.secondary" textTransform="capitalize">
                    {label}
                  </Typography>
                }
              />
            ))
          }
        </Tabs>
      </Box>
      <List>
        {statistics.map((info) => (
          <ListItem key={info.name} sx={{ py: 1, px: 0 }}>
            <ListItemText
              sx={{ mr: 2 }}
              primary={info.name}
              secondary={info.desc}
            />
            <Typography variant="body1" fontWeight="medium">
              {summary[info.properties[tab] as PropertiesType]}
            </Typography>
          </ListItem>
        ))}
      </List>
    </>
  );
}
