import React from "react";

const ListOfPlayers = () => {

    const players = [
        { name: "Virat Kohli", score: 90 },
        { name: "Rohit Sharma", score: 45 },
        { name: "KL Rahul", score: 80 },
        { name: "Shubman Gill", score: 65 },
        { name: "Hardik Pandya", score: 72 },
        { name: "Ravindra Jadeja", score: 55 },
        { name: "R Ashwin", score: 91 },
        { name: "Mohammed Shami", score: 40 },
        { name: "Jasprit Bumrah", score: 88 },
        { name: "Surya Kumar", score: 77 },
        { name: "Ishan Kishan", score: 60 }
    ];

    const lowScorePlayers = players.filter(player => player.score < 70);

    return (
        <div>

            <h2>List of Players</h2>

            <table border="1">

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        players.map((player, index) => (
                            <tr key={index}>
                                <td>{player.name}</td>
                                <td>{player.score}</td>
                            </tr>
                        ))
                    }

                </tbody>

            </table>

            <br />

            <h2>Players with Score Below 70</h2>

            <ul>

                {
                    lowScorePlayers.map((player, index) => (

                        <li key={index}>
                            {player.name} - {player.score}
                        </li>

                    ))
                }

            </ul>

        </div>
    );

};

export default ListOfPlayers;