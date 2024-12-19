using System.Diagnostics;
using Avalonia;
using Avalonia.Media;
namespace learn_019_Business.Helpers;

public static class SystemBackgroundHelper
{
    public static void SetDesktopBackgroundBrush(Application app)
    {
        var desktopColor = GetDesktopBackgroundColor();
        // Debug.WriteLine($"Desktop Background Color: {desktopColor}");
        app.Resources["DesktopBackgroundBrush"] = new SolidColorBrush(desktopColor);
    }

    private static Color GetDesktopBackgroundColor()
    {
        if (OperatingSystem.IsWindows())
        {
            return GetWindowsDesktopBackgroundColor();
        }
        else if (OperatingSystem.IsLinux())
        {
            return GetLinuxDesktopBackgroundColor();
        }

        return Colors.Black; // Fallback color
    }

    private static Color GetWindowsDesktopBackgroundColor()
    {
        var color = System.Drawing.ColorTranslator.FromWin32(
            (int)Microsoft.Win32.Registry.GetValue(
                @"HKEY_CURRENT_USER\Control Panel\Colors",
                "Background",
                "0 0 0"
            )
        );
        return new Color(255, color.R, color.G, color.B);
    }

    private static Color GetLinuxDesktopBackgroundColor()
    {
        try
        {
            var process = new Process
            {
                StartInfo = new ProcessStartInfo
                {
                    FileName = "gsettings",
                    Arguments = "get org.gnome.desktop.background primary-color",
                    RedirectStandardOutput = true,
                    UseShellExecute = false,
                    CreateNoWindow = true
                }
            };

            process.Start();
            string output = process.StandardOutput.ReadToEnd().Trim();
            process.WaitForExit();

            if (output.StartsWith("'") && output.EndsWith("'"))
            {
                output = output.Trim('\'');
            }

            if (output.StartsWith("#") && output.Length == 7)
            {
                var r = Convert.ToByte(output.Substring(1, 2), 16);
                var g = Convert.ToByte(output.Substring(3, 2), 16);
                var b = Convert.ToByte(output.Substring(5, 2), 16);
                return new Color(255, r, g, b);
            }
        }
        catch
        {
            // Ignore errors and return fallback color
        }

        return Colors.Gray; // Fallback color
    }
}