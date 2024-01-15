package com.example.appSecurity.rest;


import com.example.appSecurity.modal.AuthRequest;
import com.example.appSecurity.modal.AuthResponse;
import com.example.appSecurity.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/authentication")
@CrossOrigin("http://localhost:3000/")
public class AuthenticationController {

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
        if (authentication.isAuthenticated()) {
            String token=jwtService.generateToken(authRequest.getUsername());
            AuthResponse authResponse=AuthResponse.builder().token(token).build();
            return new ResponseEntity<>(authResponse,HttpStatus.OK);
        } else {
            throw new UsernameNotFoundException("invalid user request !");
        }

    }
}
