using System.Diagnostics;
using Business.Interfaces;

namespace Business.Services;

public abstract class FileService : IFileService
{
    private readonly string _directoryPath;
    private readonly string _filePath;

    protected FileService(string directoryPath, string fileName)
    {
        _directoryPath = directoryPath;
        _filePath = Path.Combine(_directoryPath, fileName);
    }

    public virtual string GetContentFromFile()
    {
        if (File.Exists(_filePath))
        {
            return File.ReadAllText(_filePath);
        }

        return null!;
    }

    public virtual bool SaveContentToFile(string content)
    {
        try
        {
            if (!Directory.Exists(_directoryPath))
            {
                Directory.CreateDirectory(_directoryPath);
            }
            
            File.WriteAllText(_filePath, content);
            return true;
        }
        catch (Exception ex)
        {
            Debug.WriteLine(ex.Message);
            return false;
        }
    }
}