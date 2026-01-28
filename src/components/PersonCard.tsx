import * as React from "react";
import {type Person} from "../Types.ts";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

export default function PersonCard({ person }: { person: Person }): React.JSX.Element {
    return (
        <Box
            sx={{
                perspective: 1200,
                width: "100%",
                height: 320,
                "&:hover .flipInner, &:focus-within .flipInner": {
                    transform: "rotateY(180deg)",
                },
            }}
        >
            <Box
                className="flipInner"
                sx={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    transformStyle: "preserve-3d",
                    transition: "transform 600ms cubic-bezier(0.2, 0.8, 0.2, 1)",
                }}
            >
                {/* Front */}
                <Card
                    variant="outlined"
                    sx={{
                        position: "absolute",
                        inset: 0,
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <CardActionArea sx={{ height: "100%" }}>
                        <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                {person.name} - {person.role}
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            image={person.image}
                            alt={`${person.name} logo`}
                            sx={{ height: 140, objectFit: "contain" }}
                        />
                    </CardActionArea>
                </Card>

                {/* Back */}
                <Card
                    variant="outlined"
                    sx={{
                        position: "absolute",
                        inset: 0,
                        transform: "rotateY(180deg)",
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <CardContent sx={{ flex: 1, display: "grid", alignContent: "center", gap: 1 }}>
                        <Typography>
                            {person.description}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
}