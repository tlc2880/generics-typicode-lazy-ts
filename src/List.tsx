interface ListProps<T> {
    items: T[],
    // render: (item: T) => ReactNode
}

const List = <T extends {}>({ items }: ListProps<T>) => {
// const List = <T,>({ items, render }: ListProps<T>) => {
    
    let key0;
    if (items[0]) {
        key0 = Object.keys(items[0]); // keys of the items object and the make the tables base on the keys
        //console.log(key0);
    }
    
    return (
        ( items[0] &&
            <table>
              <thead>
                    {key0 && key0[3] !== undefined ? (
                        <tr>
                            <th>User Id</th>
                            <th>Title</th>
                                {key0[3] === "body" ? (
                                    <th>Body</th>
                                ) : (
                                    <th>Completed</th>
                                )}
                        </tr>
                    ): (
                        <tr>
                            <th>User Id</th>
                            <th>Title</th>
                        </tr>
                    )}
              </thead>
              <tbody>
                    {key0 && key0[3] === undefined ? (
                        items?.map((item: any, i) => (
                        <tr key={i}>
                            <td>{item?.userId}</td>
                            <td>{item?.title}</td>
                        </tr>
                        ))
                    ) : (
                        items?.map((item: any, i) => (
                            <tr key={i}>
                                <td>{item?.userId}</td>
                                <td>{item?.title}</td>
                                {item?.body ? ( 
                                        <td>{item?.body}</td>
                                    ) :(
                                        item.completed ? (
                                            <td id="status-complete">Complete</td>
                                            ) : (
                                            <td className="status-incomplete">Incomplete</td>
                                            )
                                    )
                                }
                            </tr>
                        ))
                    )
                }
        </tbody>
        </table>
      )
    )
}

export default List