import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
  Typography,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Box,
  Container
} from '@material-ui/core';

import { STYLES } from '../../utils/constants';
import { HeaderDivider } from '../../utils/styledComponents';
import { COMPANIES } from './constants';

export const Experience = ({ setProgress, isVisible }) => {
  const [company, setCompany] = useState(COMPANIES[0]);

  const handleChange = (e) => setCompany(e.target.value);

  useEffect(() => {
    isVisible && setProgress(60)
  });


  return (
    <Container style={STYLES.FULLHEIGHT}>
      <Box py={20} display="flex" flexDirection="column" justifyItems="center">
        <Box letterSpacing={15}>
          <Typography variant="h3" gutterBottom>
            <strong>EXPERIENCE</strong>
          </Typography>
        </Box>
        <HeaderDivider />
        <Box mb={5}>
          <Typography>
            Get to know companies I've worked/work with.
        </Typography>
        </Box>
        <FormControl margin="dense" variant="outlined" fullWidth>
          <InputLabel id="companySelect">Company</InputLabel>
          <Select
            labelId="companySelector"
            id="companies"
            value={company}
            onChange={handleChange}
            label="Company"
          >
            {COMPANIES.map((company, index) => (
              <MenuItem key={index} value={company}>{company.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        {company &&
          <Box mt={5}>
            <Typography variant="h4" color="primary" >
              {company.role} @ {company.name}
            </Typography>
            <Typography variant="caption" color="textSecondary" paragraph>
              {company.period}
            </Typography>

            {company.description}

          </Box>
        }
      </Box>
    </Container>
  );
};

Experience.propTypes = {
  setProgress: PropTypes.func.isRequired,
  isVisible: PropTypes.bool,
}