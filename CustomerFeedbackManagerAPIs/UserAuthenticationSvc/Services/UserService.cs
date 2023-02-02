using IronBarCode;
using iTextSharp.text.pdf;
using iTextSharp.text.pdf.qrcode;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json;
using System;
using System.Drawing;
using System.IO;
using System.Threading.Tasks;
using UserAuthentication.Models;
using static System.Net.WebRequestMethods;
namespace UserAuthentication.Services
{
    public class UserService : IUserService
    {
        private readonly IWebHostEnvironment _environment;
        public UserService(IWebHostEnvironment environment)
        {

            _environment = environment;
        }
      
        public Task<ResponseModel> GenerateQRCode(QRModel userModel)
        {
            ResponseModel responseModel = new ResponseModel();
            responseModel.IsSuccess = false;
            if (userModel != null)
            {
                try
                {

                    GeneratedBarcode barcode = IronBarCode.QRCodeWriter.CreateQrCode(userModel.Id.ToString(), 200);
                   // if want to show generated text 
                    //barcode.AddBarcodeValueTextBelowBarcode();
                   
                    barcode.SetMargins(10);
                    barcode.ChangeBarCodeColor(Color.Black);
                    string path = Path.Combine(_environment.WebRootPath, "GeneratedQRCode");
                    if (!Directory.Exists(path))
                    {
                        Directory.CreateDirectory(path);
                    }
                    string filePath = Path.Combine(_environment.WebRootPath, "GeneratedQRCode/"+ userModel.Id.ToString()+".png");
                    barcode.SaveAsPng(filePath);
                    string fileName = Path.GetFileName(filePath);
                    responseModel.IsSuccess = true;
                }
                catch(Exception e)
                {
                    responseModel.IsSuccess = false;
                }
             }
            return Task.FromResult(responseModel);
        }
    
    

        public Task<ResponseModel> ValidateUser(UserModel userModel)
        {
            ResponseModel responseModel = new ResponseModel();
            responseModel.IsSuccess = false;
            if (userModel != null)
            {
                if (userModel.UserName == "admin@admin.com" && userModel.Password == "Admin@123")
                {
                    responseModel.IsSuccess = true;
                    var getUserDetails = new UserModel
                    {
                        Id = 1,
                        UserName = "Admin",
                        Enabled = true
                    };

                    responseModel.Content = JsonConvert.SerializeObject(getUserDetails);
                }
            }
            return Task.FromResult(responseModel);
        }
    }
}
