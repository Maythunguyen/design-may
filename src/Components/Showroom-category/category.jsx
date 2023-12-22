import React from 'react';
import './category.css';
import CategoryCard from './category-card';

const categoryDetails = [
    {
        key : 1,
        imgBackground:"https://images.unsplash.com/photo-1634148740767-a0f5d1421059?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fGFybSUyMGNoYWlyfGVufDB8fDB8fHww",
        title: " ARMCHAIRS",
        imgIcon: "https://static.thenounproject.com/png/3535152-200.png"

    },

    {
        key : 2,
        imgBackground:"https://img5.su-cdn.com/cdn-cgi/image/width=600,height=600,format=webp/mall/file/2021/08/20/1c9afda997f94bec8f4a93b613817ad9.jpg",
        title: " ARMCHAIRS",
        imgIcon: "https://static.thenounproject.com/png/3535152-200.png"
    },

    {
        key : 3,
        imgBackground:"https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHNvZmF8ZW58MHx8MHx8fDA%3D",
        title: " ARMCHAIRS",
        imgIcon: "https://static.thenounproject.com/png/3535152-200.png"
    },

    {
        key : 4,
        imgBackground:"https://www.industville.co.uk/cdn/shop/files/table_lamp_ornate_tripod_pewter_lampshade_small_empire_grey_ORN-TITL-P-GR-SEM_grey_background.jpg?v=1688569942",
        title: " ARMCHAIRS",
        imgIcon: "https://static.thenounproject.com/png/3535152-200.png"
    },
    {
        key : 5,
        imgBackground:"https://png.pngtree.com/thumb_back/fh260/background/20231003/pngtree-3d-render-of-a-gray-background-with-a-wooden-dresser-image_13585923.png",
        title: " ARMCHAIRS",
        imgIcon: "https://static.thenounproject.com/png/3535152-200.png"
    },
    {
        key : 6,
        imgBackground:"https://embed.widencdn.net/img/cityfurniture/pvk55i0ya5/640px/Z2202464072F00_BH_LINEA_DKT_WD_CNSL_TBL.jpeg?keep=c&crop=no&quality=80&u=m2xgp2",
        title: " ARMCHAIRS",
        imgIcon: "https://static.thenounproject.com/png/3535152-200.png"
    },
    {
        key : 7,
        imgBackground:"https://flocstudio.com.au/wp-content/uploads/2018/04/WOUD_Lifestyle_2018_Sentrum-Hibo.jpg",
        title: " ARMCHAIRS",
        imgIcon: "https://static.thenounproject.com/png/3535152-200.png"
    },
    {
        key : 8,
        imgBackground:"https://www.dshop.com.au/assets/full/BYXK16-200.jpg?20231004131919",
        title: " ARMCHAIRS",
        imgIcon: "https://static.thenounproject.com/png/3535152-200.png"
    },
    {
        key : 9,
        imgBackground:"https://i.etsystatic.com/18862501/r/il/de51a6/2430071078/il_fullxfull.2430071078_bo7v.jpg",
        title: " ARMCHAIRS",
        imgIcon: "https://static.thenounproject.com/png/3535152-200.png"
    }
]
function Category(category) {
  return (
    <div className="category-card-container">
        {categoryDetails.map(category => (
        <CategoryCard
          id = {category.id}
          key = {category.id}
          img = {category.imgBackground}
          title={category.title}
          imgIcon={category.imgIcon}
      />
              
      ))}
    </div>
  )
}

export default Category;
