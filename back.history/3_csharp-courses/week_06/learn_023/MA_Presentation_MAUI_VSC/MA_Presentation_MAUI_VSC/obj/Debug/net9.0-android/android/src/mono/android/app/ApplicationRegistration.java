package mono.android.app;

public class ApplicationRegistration {

	public static void registerApplications ()
	{
				// Application and Instrumentation ACWs must be registered first.
		mono.android.Runtime.register ("MA_Presentation_MAUI_VSC.MainApplication, MA_Presentation_MAUI_VSC, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null", crc640379e1b2f4cae5b7.MainApplication.class, crc640379e1b2f4cae5b7.MainApplication.__md_methods);
		mono.android.Runtime.register ("Microsoft.Maui.MauiApplication, Microsoft.Maui, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null", crc6488302ad6e9e4df1a.MauiApplication.class, crc6488302ad6e9e4df1a.MauiApplication.__md_methods);
		
	}
}
