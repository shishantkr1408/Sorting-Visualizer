

/*
    *****************
    DONE BY:-   SHISHANT
    
    *****************
*/


function Selection_sort()
{
    c_delay=0;

    for(let i=0;i<array_size-1;i++)
    {
        div_update(divs[i],div_sizes[i],"red");//Color update

        let index_min=i;

        for(let j=i+1;j<array_size;j++)
        {
            div_update(divs[j],div_sizes[j],"yellow");//Color update

            if(div_sizes[j]<div_sizes[index_min])
            {
                if(index_min!=i)
                {
                    div_update(divs[index_min],div_sizes[index_min],"#6399f1");//Color update
                }
                index_min=j;
                div_update(divs[index_min],div_sizes[index_min],"red");//Color update
            }
            else
            {
                div_update(divs[j],div_sizes[j],"#6399f1");//Color update
            }
        }
        
        if(index_min!=i)
        {
            let temp=div_sizes[index_min];
            div_sizes[index_min]=div_sizes[i];
            div_sizes[i]=temp;

            div_update(divs[index_min],div_sizes[index_min],"red");//Height update
            div_update(divs[i],div_sizes[i],"red");//Height update
            div_update(divs[index_min],div_sizes[index_min],"#6399f1");//Color update
        }
        div_update(divs[i],div_sizes[i],"#b578e8");//Color update
    }
    div_update(divs[array_size-1],div_sizes[array_size-1],"#b578e8");//Color update 

    enable_buttons();
}

/*
    *****************
    DONE BY:-   SHISHANT
    
    *****************
*/