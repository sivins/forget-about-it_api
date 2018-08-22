import {QueryFile, TQueryFileOptions} from 'pg-promise';

const path = require('path');

///////////////////////////////////////////////////////////////////////////////////////////////
// Criteria for deciding whether to place a particular query into an external SQL file or to
// keep it in-line (hard-coded):
//
// - Size / complexity of the query, because having it in a separate file will let you develop
//   the query and see the immediate updates without having to restart your application.
//
// - The necessity to document your query, and possibly keeping its multiple versions commented
//   out in the query file.
//
// In fact, the only reason one might want to keep a query in-line within the code is to be able
// to easily see the relation between the query logic and its formatting parameters. However, this
// is very easy to overcome by using only Named Parameters for your query formatting.
////////////////////////////////////////////////////////////////////////////////////////////////
export = {
    user: {
        add: sql('user/add.sql'),
        find: sql('user/find.sql'),
        details: sql('user/details.sql')
    },
    purchase: {
        add: sql('purchase/add.sql'),
        find: sql('purchase/find.sql')
    }
};

///////////////////////////////////////////////
// Helper for linking to external query files;
function sql(file: string): QueryFile {

    const fullPath: string = path.join(__dirname, file); // generating full path;
    const options: TQueryFileOptions = {

        // minifying the SQL is always advised;
        // see also option 'compress' in the API;
        minify: true,

        // Showing how to use static pre-formatting parameters -
        // we have variable 'schema' in each SQL (as an example);
        params: {
            schema: 'public' // replace ${schema~} with "public"
        }
    };

    const qf: QueryFile = new QueryFile(fullPath, options);

    if (qf.error) {
        // Something is wrong with our query file :(
        // Testing all files through queries can be cumbersome,
        // so we also report it here, while loading the module:
        console.error(qf.error);
    }

    return qf;

    // See QueryFile API:
    // http://vitaly-t.github.io/pg-promise/QueryFile.html
}

//////////////////////////////////////////////////////////////////////////
// Possible alternative - enumerating all SQL files automatically ;)
// API: http://vitaly-t.github.io/pg-promise/utils.html#.enumSql
/*
// generating a recursive SQL tree for dynamic use of camelized names:
import {utils} from 'pg-promise';
export = utils.enumSql(__dirname, {recursive: true}, file => {
    // NOTE: 'file' contains the full path to the SQL file, as we use __dirname for enumeration.
    return new QueryFile(file, {
        minify: true,
        params: {
            schema: 'public' // replace ${schema~} with "public"
        }
    });
});
*/