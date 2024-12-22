using System.Diagnostics;
using Business.Interfaces;
using Business.Models;

namespace Business.Repositories;

public class UserRepository(IUserFileService userFileService) : BaseRepository<UserEntity>, IUserRepository
{
    private readonly IUserFileService _userFileService = userFileService;

    public override bool SaveToFile(List<UserEntity> list)
    {
        try
        {
            var json = Serialize(list);
            _userFileService.SaveContentToFile(json);
            
            return true;
        }
        catch (Exception ex)
        {
            Debug.WriteLine(ex.Message);
            return false;
        }
    }

    public override List<UserEntity>? GetFromFile()
    {
        var json = _userFileService.GetContentFromFile();
        var list = Deserialize(json);
        return list;
    }
}