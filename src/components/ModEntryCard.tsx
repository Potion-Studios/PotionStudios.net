import * as React from "react";
import {type ModEntry} from "../Types.ts";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";


export default function ModEntryCard({ entry }: { entry: ModEntry }): React.JSX.Element {
    return (
        <Card variant="outlined">
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={entry.logo}
                    alt={`${entry.name} logo`}
                    sx={{ height: 140, objectFit: "contain" }}
                />
                <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>{entry.name}</Typography>
                    <Typography>{entry.description}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}