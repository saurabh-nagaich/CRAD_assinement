import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function FilterList() {
    const filters=useSelector(state => state.filter);
    console.log(filters)
    return (
        <div className="blog_list">
            <h2 className="list_title">Filters-LIST</h2>
            <div className='container'>
            {
                filters.length>0?filters.map((el)=>(
                    <Link to={`/filterDetails/${el._id}`} id="link" key={el._id} >
                        <CardTemp data={el}/>
                    </Link>
                )):<h1 style={{  textAlign: "center" }}>Filter list is Empty</h1>
            }
            </div>
        </div>
    )
}

export default FilterList



function CardTemp({data}) {
  return (
    <Card sx={{ width: 345 , marginBottom:5}}>
      <CardActionArea>
        {
          data.type==="IMAGE_AD"?(
            <CardMedia
              component="img"
              height="180"
              image={data.content_url}
              alt="green iguana"
              autoPlay
            />
          ):(
            <iframe width="345" height="175" src={`https://www.youtube.com/embed/${data.content_url.split("=")[1]}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          )
        }
        <CardContent className='card'>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.headline}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
