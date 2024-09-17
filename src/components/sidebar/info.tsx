import { useState } from 'react';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import useAcademicSummary from '../../use/use-summary';
import useReduxStore from '../../use/redux-store';

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
  const { forceCookiesModal } = useReduxStore();

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

      <Divider style={{ marginTop: "5em" }} />

      <Box padding={2} display="flex" flexDirection="column">
        <Typography variant="caption" color="text.secondary">
          Desarrollado por
          {" "}
          <a href="https://github.com/arturyepez10" target="_blank" rel="noopener noreferrer">
            Arturo Yepez
          </a>
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Versión actual
          {" "}
          <a href="https://github.com/arturyepez10/indice-usb" target="_blank" rel="noopener noreferrer">
            0.9.0
          </a>
        </Typography>
        <Typography
          variant="caption"
          color="text.secondary"
          style={{
            textDecorationLine: "underline",
            cursor: "pointer"
          }}
          width="fit-content"
          onClick={() => forceCookiesModal(true)}
        >
          Política de datos
        </Typography>
      </Box>
    </>
  );
}
