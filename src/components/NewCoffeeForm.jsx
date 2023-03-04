<TextField
id='outlined-basic'
label='Roaster'
variant='outlined'
value={roaster}
onChange={(e) => setRoaster(e.target.value)}
/>

<TextField
id='outlined-basic'
label='Origin'
variant='outlined'
value={origin}
onChange={(e) => setOrigin(e.target.value)}
/>
<TextField
id='outlined-basic'
label='Process'
variant='outlined'
value={process}
onChange={(e) => setProcess(e.target.value)}
/>
<TextField
id='outlined-basic'
label='Flavor Notes'
variant='outlined'
value={notes}
onChange={(e) => setNotes(e.target.value.split(","))}
/>
<Button variant='contained' onClick={onSubmitCoffee} disableElevation>
Submit
</Button>