import React, { useState, useEffect } from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { commerce } from '../../lib/commerce';
import FormInput from './CustomTextField';

const ExtraField = ({ extrafield }) => {
    return (
        <div>
            <FormInput required name={extrafield.name} label={extrafield.name} />
            
        </div>
    )
}

export default ExtraField
