import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

export default () => (
    <Card>
        <CardHeader title="Velkommen til dit Dashboard!" />
        <CardContent>Her vil det være muligt for dig, at skabe et overblik over de vigtigste ting.</CardContent>
    </Card>
);