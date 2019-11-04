//Note: ignore MMM namespace errors, just provide absolute path to SDK dll file when edgeJs calls this C# script
using System;
using System.Threading.Tasks;
using MMM.Readers;
using MMM.Readers.FullPage;

public class Startup
{
    public async Task<object> Invoke(object input)
    {
        try
        {
            if (!Reader.IsInitialised())
            {
                throw new Exception("Not initialised.");
            }

            ErrorCode result = Reader.ReadDocument();
            if (result != ErrorCode.NO_ERROR_OCCURRED)
            {
                throw new Exception(result.ToString());
            }
            else
            {
                object data = null;

                result = Reader.GetData(DataType.CD_CODELINE_DATA, ref data);

                Reader.Shutdown();

                return await Task.FromResult(new { data, success = true });
            }
        }
        catch (Exception e)
        {
            return new { error = e.Message, success = false };
        }
    }
}