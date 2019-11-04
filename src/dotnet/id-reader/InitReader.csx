//Note: ignore MMM namespace errors, just provide absolute path to SDK dll file when edgeJs calls this C# script
using System;
using System.Threading.Tasks;
using MMM.Readers;
using MMM.Readers.FullPage;

public class Startup
{
    public async Task<object> Invoke(dynamic input)
    {
        try
        {
            Reader.EnableLogging(true, 1, -1, "HLBlockingExample.Net.log");

            ErrorCode result = Reader.Initialise(null, null, null, null, true, false);

            if (result != ErrorCode.NO_ERROR_OCCURRED)
            {
                throw new Exception(result.ToString());
            }

            return await Task.FromResult(new { success = true });
        }
        catch (Exception e)
        {
            return new { error = e.Message, success = false };
        }
    }
}