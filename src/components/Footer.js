import React from 'react';
import {
  Box,
  Link,
  SvgIcon,
  Tooltip,
} from '@mui/material';

import {
  GitHub,
  Email,
  LinkedIn,
} from '@mui/icons-material';

const settings = [
  [GitHub, 'Meu GitHub', 'https://github.com/patrikbatista'],
  [LinkedIn, 'Meu LinkedIn', 'https://www.linkedin.com/in/patrik-batista/'],
  [Email, 'pcr_batista@hotmail.com', 'mailto:pcr_batista@hotmail.com'],
];

function Footer() {
  return (
    <Box
      id="contacts"
      sx={ {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: 1,
        height: 68.5,
        backgroundColor: 'rgba(156, 156, 156, 1.00)',
        position: 'fixed',
        bottom: 0,
      } }
    >
      { settings.map(([icon, description, link], index) => (
        <Box
          key={ index }
        >
          <Tooltip
            title={ description }
            placement="right-end"
          >
            <Link
              href={ link }
              underline="none"
              color="inherit"
              target="_blank"
              rel="noreferrer"
            >
              <SvgIcon
                fontSize="large"
                component={ icon }
                titleAccess={ description }
              />
            </Link>
          </Tooltip>
        </Box>
      ))}

    </Box>
  );
}

export default Footer;
